export const signInUser = async (User) => {
    // const logins = useCookie<number>('logins')
    const credentials = $fetch("http://10.0.34.37:3333/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: User.value,
    })
    return credentials;
};


export const initUser = async () => {
    const userCookie = useCookie("autKey");
  
    const router = useRouter();
  
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //   } else {
    //     //if signed out
    //     router.push("/");
    //   }
  
    //   firebaseUser.value = user;
  
    //   // @ts-ignore
    //   userCookie.value = user; //ignore error because nuxt will serialize to json
  
    //   $fetch("/api/auth", {
    //     method: "POST",
    //     body: { user },
    //   });
    // });
    console.log(userCookie)
  };