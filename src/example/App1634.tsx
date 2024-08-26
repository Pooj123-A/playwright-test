
import { test, expect } from "@playwright/experimental-ct-react";
import App1634 from "./App1634.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1634 />);
  await expect(component).toContainText("Learn React");
});
