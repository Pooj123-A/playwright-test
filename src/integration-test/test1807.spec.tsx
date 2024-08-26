
import { test, expect } from "@playwright/experimental-ct-react";
import App1807 from "../example/App1807.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1807 />);
  await expect(component).toContainText("Learn React");
});
