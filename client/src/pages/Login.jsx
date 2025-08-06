import { AppWindowIcon, CodeIcon } from "lucide-react"
import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Login = () => {
    const [activeTab, setActiveTab] = useState("signup");
    const handleTabChange = (value) => {
        setActiveTab(value);
    };
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (activeTab === "signup") {
            setSignupData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            setLoginData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeTab === "signup") {
            console.log("Signup Data:", signupData);
            // Handle signup logic here
        } else {
            console.log("Login Data:", loginData);
            // Handle login logic here
        }
    };
    
    return (
        <div className="flex items-center w-full justify-center">
            <Tabs defaultValue="signup" className="w-full max-w-md" onValueChange={handleTabChange}>
                <TabsList>
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Create a new account and click signup.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">

                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">Username</Label>
                                <Input
                                    type="text"
                                    value={signupData.username}
                                    placeHolder="peduarte"
                                    onChange={(e) => handleInputChange(e)}
                                    name="username"
                                    required="true"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-email">Email</Label>
                                <Input
                                    type="email"
                                    placeHolder="pedroduarte@example.com"
                                    onChange={(e) => handleInputChange(e)}
                                    name="email"
                                    required="true"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-password">Password</Label>
                                <Input
                                    type="password"
                                    onChange={(e) => handleInputChange(e)}
                                    name="password"
                                    required="true"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={(e) => handleSubmit(e)}>Signup</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Enter your login credentials here. After successful signup, you&apos;ll be logged
                                in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">

                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-email">Email</Label>
                                <Input
                                    type="email"
                                    value={loginData.email}
                                    placeHolder="pedroduarte@example.com"
                                    onChange={(e) => handleInputChange(e)}
                                    name="email"
                                    required="true"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-password">Password</Label>
                                <Input
                                    type="password"
                                    value={loginData.password}
                                    onChange={(e) => handleInputChange(e)}
                                    name="password"
                                    required="true"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={(e) => handleSubmit(e)}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login
