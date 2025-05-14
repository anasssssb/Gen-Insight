"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function AutoMLPage() {
  const [progress, setProgress] = useState(100)
  const [learningRate, setLearningRate] = useState(0.01)
  const [epochs, setEpochs] = useState(100)
  const [batchSize, setBatchSize] = useState(32)

  const handleDatasetUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle dataset upload logic here
    console.log("Dataset uploaded:", event.target.files?.[0]?.name)
  }

  const handleHyperparameterTraining = () => {
    // Handle hyperparameter training logic here
    console.log("Starting hyperparameter training with:", { learningRate, epochs, batchSize })
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">GenInsight AutoML</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Automated Machine Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Dataset</span>
                <span>Model</span>
                <span>Results</span>
              </div>
              <Progress value={progress} className="w-full" />
              <div className="text-right text-sm text-gray-500">{progress}% Complete</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Dataset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Label htmlFor="dataset">Choose Dataset File</Label>
              <Input id="dataset" type="file" onChange={handleDatasetUpload} />
              <p className="text-sm text-gray-500">Supported formats: CSV, JSON</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hyperparameter Training</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Learning Rate: {learningRate}</Label>
                <Slider
                  min={0.0001}
                  max={0.1}
                  step={0.0001}
                  value={[learningRate]}
                  onValueChange={([value]) => setLearningRate(value)}
                />
              </div>
              <div>
                <Label>Epochs: {epochs}</Label>
                <Slider min={10} max={1000} step={10} value={[epochs]} onValueChange={([value]) => setEpochs(value)} />
              </div>
              <div>
                <Label>Batch Size: {batchSize}</Label>
                <Slider
                  min={8}
                  max={256}
                  step={8}
                  value={[batchSize]}
                  onValueChange={([value]) => setBatchSize(value)}
                />
              </div>
              <Button onClick={handleHyperparameterTraining}>Start Training</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Model Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Accuracy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Model 2</TableCell>
                  <TableCell>92.83%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Model 1</TableCell>
                  <TableCell>84.51%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Best Model Evaluation Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Accuracy</h3>
                <Progress value={80.04} className="w-full" />
                <span className="text-sm text-gray-500">80.04%</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Precision</h3>
                <Progress value={81.97} className="w-full" />
                <span className="text-sm text-gray-500">81.97%</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Recall</h3>
                <Progress value={83.63} className="w-full" />
                <span className="text-sm text-gray-500">83.63%</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">F1Score</h3>
                <Progress value={80.94} className="w-full" />
                <span className="text-sm text-gray-500">80.94%</span>
              </div>
            </div>
            <Button className="mt-4">View Detailed Results</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

