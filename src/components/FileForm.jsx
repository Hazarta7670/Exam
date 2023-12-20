function FileForm({handleFileInput}) {
    return (
        <form className='file-form' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='file'>Place your File Here</label> 
                <span><i className="fa-regular fa-circle-right"></i></span>
                <input htmlFor='file' type='file'
                    onChange={(e) => {handleFileInput(e)}}
                />
        </form>
    )
}

export default FileForm