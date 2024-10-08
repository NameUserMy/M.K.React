


class Request {

    /*User */
    public static async GetUser() {

        const headers = {
            "Content-Type": "application/json"
        }

        return await fetch("https://localhost:7101/api/User", { method: "Get", headers: headers }).then((response) => {

            if (response.ok) {
                return response.json();
            };
        });
    };
    public static async ConfirmUser(id: number) {

        const headers = {
            "Content-Type": "application/json"
        }
        return await fetch(`https://localhost:7101/api/User/${id}`, {
            method: 'PUT',
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });


    }

    public static async DeleteUser(id: number) {

        const headers = {
            "Content-Type": "application/json"
        }
        return await fetch(`https://localhost:7101/api/User/${id}`, {
            method: 'Delete',
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });


    }

    public static async UserAdd(formIn: any) {

        let form = new FormData(formIn);

        const headers = {
            "Content-Type": "application/json;charset=UTF-8"
        }
        return await fetch("https://localhost:7101/api/User/", {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(form)),
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }



        });

    }

    public static async EdditUser(formIn: any) {

        let form = new FormData(formIn);
        let temp = JSON.stringify(Object.fromEntries(form))
        let data = JSON.parse(temp);
        let conf: boolean = false;

        if (data['confirmation'] === '0' || data['confirmation'] === "false") {


            conf = false;
        } else {

            conf = true;
        }
        const headers = {
            "Content-Type": "application/json;charset=UTF-8"
        }
        return await fetch("https://localhost:7101/api/User", {
            method: 'PUT',
            body: JSON.stringify({ id: data['id'], nickName: data['nickName'], "confirmation": conf }),
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    console.log(error);
                    const e = new error("Ex...");
                    e.data = error;


                });

            }
        });

    }
    /***************/

    /*Genre*/
    public static async AddGenre(FormIn: any) {


        let form = new FormData(FormIn);
        const headers = {
            "Content-Type": "application/json;charset=UTF-8"
        }
        return await fetch("https://localhost:7101/api/Genre", {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(form)),
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }



        });
    }

    public static async GetGenreData() {

        const headers = {
            "Content-Type": "application/json"
        }

        return await fetch("https://localhost:7101/api/Genre", {

            method: "Get",
            headers: headers

        }).then(response => {

            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });
    }


    public static async DeleteGenre(id: number) {



        const headers = {
            "Content-Type": "application/json"
        }
        return await fetch(`https://localhost:7101/api/Genre/${id}`, {
            method: 'Delete',
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });



    }
    public static async UpdateGenre(id: any, title: string) {
        console.log(id)
        const headers = {
            "Content-Type": "application/json;charset=UTF-8"
        }
        let form = new FormData();

        form.append("Title", title);
        form.append("Id", `${id}`);

        return await fetch("https://localhost:7101/api/Genre", {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(Object.fromEntries(form)),

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });


    };



    /******/


    /****Perform */

    public static async AddPerformer(formIn: any) {



        let form = new FormData(formIn);




        const headers = {
            "Content-Type": "application/json;charset=UTF-8"
        }
        return await fetch("https://localhost:7101/api/Performers", {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(form)),
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }


        });


    }

    public static async GetPerformerData() {

        const headers = {
            "Content-Type": "application/json"
        }

        return await fetch("https://localhost:7101/api/Performers", {

            method: "Get",
            headers: headers

        }).then(response => {

            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        })


    }





public static async DeletePerformer(id:number) {

    const headers = {
        "Content-Type": "application/json"
    }
   return await fetch(`https://localhost:7101/api/Performers/${id}`, {
        method: 'Delete',
        headers: headers,

    }).then(response => {

        if (response.ok) {

           return response.json();

        } else {
            return response.json().then(error => {

                const e = new error("Ex...");
                e.data = error;

            });

        }

    });



}
public static async UpdatePerformer(id:any, name:string) {

    const headers = {
        "Content-Type": "application/json;charset=UTF-8"
    }
    let form = new FormData();
    form.append("Name", name);
    form.append("Id", id);
  return await  fetch(`https://localhost:7101/api/Performers`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(Object.fromEntries(form)),

    }).then(response => {

        if (response.ok) {

           return response.json();

        } else {
            return response.json().then(error => {

                const e = new error("Ex...");
                e.data = error;

            });

        }

    });


}

    /**** */


    /********Track*******/
    public static async AddTrack(formIn: any) {



        console.log(formIn.current[0].value);
        const form = new FormData(formIn.current)


        form.append('uploadFile', formIn.current.file);
        form.append('idGenre', formIn.current[0].value);
        form.append('idPerformer', formIn.current[1].value);

        const headers = {
            'Accept': 'application/json',
        }
        return await fetch("https://localhost:7101/api/Track", {
            method: 'POST',
            headers: headers,
            body: form,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }



        });


    }

    public static async UpdateTrack(id: any, title: string) {

        const headers = {
            "Content-Type": "application/json;charset=UTF-8"
        }
        let form = new FormData();

        form.append("Title", title);
        form.append("Id", id);
        return await fetch("https://localhost:7101/api/Track", {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(Object.fromEntries(form)),

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });


    };
    public static async GetTrack() {
        const headers = {
            "Content-Type": "application/json"
        }

        return await fetch("https://localhost:7101/api/Track", {
            method: "Get",
            headers: headers
        }).then(response => {

            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });




    }



    public static async DeleteTrack(id: number) {

        const headers = {
            "Content-Type": "application/json"
        }
        return await fetch(`https://localhost:7101/api/Track/${id}`, {
            method: 'Delete',
            headers: headers,

        }).then(response => {

            if (response.ok) {

                return response.json();

            } else {
                return response.json().then(error => {

                    const e = new error("Ex...");
                    e.data = error;

                });

            }

        });


    }




    /*******************/
};

export default Request;