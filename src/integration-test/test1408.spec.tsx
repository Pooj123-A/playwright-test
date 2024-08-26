
import { test, expect } from "@playwright/experimental-ct-react";
import App1408 from "../example/App1408.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1408 />);
  await expect(component).toContainText("Learn React");
});
