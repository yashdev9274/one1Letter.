"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { LineChart, BarChart } from '@/components/ui/chart'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, ChevronDown, Home, Mail, Users, BarChart2, FileText, Settings, Search, PlusCircle } from 'lucide-react'

export default function DashboardUi() {
    return (
        <div className="flex h-screen bg-black text-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-black p-4">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">One1Letter</h1>
                </div>
                {/* <div className="mb-6">
                    <Input type="text" placeholder="Search..." className="w-full bg-black text-gray-100 placeholder-gray-400" />
                </div> */}
                <nav className='mt-10'>
                    <ul className="space-y-2">
                        {[
                            { icon: <Home className="mr-2 h-4 w-4" />, label: 'Dashboard' },
                            { icon: <Mail className="mr-2 h-4 w-4" />, label: 'Campaigns' },
                            { icon: <Users className="mr-2 h-4 w-4" />, label: 'Subscribers' },
                            { icon: <BarChart2 className="mr-2 h-4 w-4" />, label: 'Analytics' },
                            { icon: <FileText className="mr-2 h-4 w-4" />, label: 'Templates' },
                            { icon: <Settings className="mr-2 h-4 w-4" />, label: 'Settings' },
                        ].map((item, index) => (
                            <li key={index}>
                                <Button variant="ghost" className="w-full justify-start">
                                    {item.icon}
                                    {item.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <header className="flex items-center justify-between p-4 bg-black">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Account Settings</DropdownMenuItem>
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-black p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <Card className="bg-black text-gray-100">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">10,482</div>
                                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-black text-gray-100">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
                                <Mail className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">58.2%</div>
                                <p className="text-xs text-muted-foreground">+0.5% from last campaign</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-black text-gray-100">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Avg. Click Rate</CardTitle>
                                <BarChart2 className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">24.3%</div>
                                <p className="text-xs text-muted-foreground">-0.2% from last campaign</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <Card className="bg-black text-gray-100">
                            <CardHeader>
                                <CardTitle>Subscriber Growth</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {/* <LineChart className="h-[200px]" /> */}
                            </CardContent>
                        </Card>
                        <Card className="bg-black text-gray-100">
                            <CardHeader>
                                <CardTitle>Email Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {/* <BarChart className="h-[200px]" /> */}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Card className="bg-black text-gray-100">
                            <CardHeader>
                                <CardTitle>Recent Campaigns</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {['Weekly Newsletter', 'Product Launch', 'Summer Sale'].map((campaign, index) => (
                                        <li key={index} className="flex items-center justify-between">
                                            <span>{campaign}</span>
                                            <Button variant="outline" size="sm">View</Button>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-black text-gray-100">
                            <CardHeader>
                                <CardTitle>Top Performing Templates</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {['Minimalist', 'Bold & Bright', 'Corporate Clean'].map((template, index) => (
                                        <li key={index} className="flex items-center justify-between">
                                            <span>{template}</span>
                                            <Button variant="outline" size="sm">Edit</Button>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <Button className="w-full bg-zinc-500 hover:bg-black text-white">
                        <PlusCircle className="mr-2 h-4 w-4" /> Create New Campaign
                    </Button>
                </main>
            </div>
        </div>
    )
}