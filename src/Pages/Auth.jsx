
import React, { useState } from "react"

export default function (props) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Giriş Yap</h3>
                        <div className="text-center">
                            Hala kayit olmadin mi?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Kayit Ol
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>E-mail</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Lütfen e-mailinizi girin"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Şifre</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Lütfen şifrenizi girin"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Giriş
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Şifremi Unuttum
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Zaten bir hesabin var mi?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Giriş Yap
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Ad ve Soyad</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Örnek: Eray Eroğlu"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>E-mail</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Lütfen e-mailinizi girin"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Şifre</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Lütfen şifrenizi girin"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Kayit Ol
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Şifremi Unuttum
                    </p>
                </div>
            </form>
        </div>
    )
}