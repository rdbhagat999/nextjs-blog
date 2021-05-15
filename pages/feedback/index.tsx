import LayoutComponent from '@components/layout'
function FeedbackPage() {
    return (

        <LayoutComponent title="Feedback">

            <div className="container py-5">

                <h1>Feedback</h1>
                <hr className="my-3" />

                <form className="p-4 p-md-5 border rounded-3 bg-light" name="contact" method="POST" data-netlify="true">

                    <input type="hidden" name="form-name" value="contact"></input>
                    
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingName" placeholder="Name" />
                        <label htmlFor="floatingName">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>

                </form>
            
            </div>
            
        </LayoutComponent>

        
    );
}

export default FeedbackPage;