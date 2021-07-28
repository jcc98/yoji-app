import React from "react"
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%`,
    };
    }

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
}));

export default function SimpleModal({word, def, grade, yomi}) {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle)
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{word}</h2>
            <h1>Grade: {grade} <br></br>Reading: {yomi}</h1>
            <p id="simple-modal-description">
                {def}
            </p>
            <SimpleModal />
        </div>
    )

    return (
        <div>
            <h3 onClick={handleOpen}>{word}</h3>
            {/* <button type="button" onClick={handleOpen}>
                Check more info
            </button> */}
            <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}