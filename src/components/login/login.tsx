import "./styles/dark/login.css";
import "./styles/light/login.css";
const Login = () => {
	return (
		<div className="auth-container d-flex">
			<div className="container mx-auto align-self-center">
				<div className="row">
					<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-12 d-flex flex-column align-self-center mx-auto">
						<div className="card mt-3 mb-3">
							<div className="card-body">
								<div className="row">
									<div className="col-md-12 mb-3">
										<h2>Sign In</h2>
										<p>Enter your email and password to login</p>
									</div>
									<div className="col-md-12">
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input type="email" className="form-control" />
										</div>
									</div>
									<div className="col-12">
										<div className="mb-4">
											<label className="form-label">Password</label>
											<input type="text" className="form-control" />
										</div>
									</div>
									<div className="col-12">
										<div className="mb-3">
											<div className="form-check form-check-primary form-check-inline">
												<input
													className="form-check-input me-3"
													type="checkbox"
													id="form-check-default"
												/>
												<label
													className="form-check-label"
													htmlFor="form-check-default"
												>
													Remember me
												</label>
											</div>
										</div>
									</div>

									<div className="col-12">
										<div className="mb-4">
											<button className="btn btn-secondary w-100">
												SIGN IN
											</button>
										</div>
									</div>

									{/* <div className="col-12 mb-4">
                                    <div className="">
                                        <div className="seperator">
                                            <hr/>
                                            <div className="seperator-text"> <span>Or continue with</span></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-sm-4 col-12">
                                    <div className="mb-4">
                                        <button className="btn  btn-social-login w-100 ">
                                            <img src="../src/assets/img/google-gmail.svg" alt="" className="img-fluid"/>
                                            <span className="btn-text-inner">Google</span>
                                        </button>
                                    </div>
                                </div>
    
                                <div className="col-sm-4 col-12">
                                    <div className="mb-4">
                                        <button className="btn  btn-social-login w-100">
                                            <img src="../src/assets/img/github-icon.svg" alt="" className="img-fluid"/>
                                            <span className="btn-text-inner">Github</span>
                                        </button>
                                    </div>
                                </div>
    
                                <div className="col-sm-4 col-12">
                                    <div className="mb-4">
                                        <button className="btn  btn-social-login w-100">
                                            <img src="../src/assets/img/twitter.svg" alt="" className="img-fluid"/>
                                            <span className="btn-text-inner">Twitter</span>
                                        </button>
                                    </div>
                                </div> */}

									<div className="col-12">
										<div className="text-center">
											<p className="mb-0">
												Dont't have an account ?{" "}
												<a href="javascript:void(0);" className="text-warning">
													Sign Up
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
