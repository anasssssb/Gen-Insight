"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            GenInsight
          </h1>
          <nav className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Unlock the Power of AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            GenInsight provides cutting-edge AI tools for data analysis, natural language processing, and automated
            machine learning.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Analysis</CardTitle>
                <CardDescription>Powerful tools for analyzing your data</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Upload, analyze, and visualize your data with our intuitive interface. Generate insights and make
                  data-driven decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/data-analysis">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>NLP Chatbot</CardTitle>
                <CardDescription>Natural language processing at your fingertips</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Interact with our advanced NLP chatbot to get answers, generate content, and automate tasks using
                  natural language.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/nlp-chatbot">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AutoML</CardTitle>
                <CardDescription>Automated machine learning for everyone</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Build, train, and deploy machine learning models without writing code. Our AutoML platform makes AI
                  accessible to all.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/automl">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
        </section>

        <section className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Join thousands of users who are already leveraging the power of AI with GenInsight.
              </p>
              <Button size="lg" asChild>
                <Link href="/signup">Sign Up Now</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/3 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
              <h4 className="text-xl font-bold mb-4">Free Trial</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Full access to all features</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>No credit card required</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>14-day free trial</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                GenInsight
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Empowering you with AI</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Features
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Pricing
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} GenInsight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

