
import { test, expect } from "@playwright/experimental-ct-react";
import App1414 from "../example/App1414.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1414 />);
  await expect(component).toContainText("Learn React");
});
