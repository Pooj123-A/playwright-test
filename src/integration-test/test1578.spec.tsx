
import { test, expect } from "@playwright/experimental-ct-react";
import App1578 from "../example/App1578.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1578 />);
  await expect(component).toContainText("Learn React");
});
