
import { test, expect } from "@playwright/experimental-ct-react";
import App1494 from "../example/App1494.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1494 />);
  await expect(component).toContainText("Learn React");
});
