
import { test, expect } from "@playwright/experimental-ct-react";
import App1629 from "./App1629.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1629 />);
  await expect(component).toContainText("Learn React");
});
