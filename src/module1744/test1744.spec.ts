
import { test, expect } from "@playwright/experimental-ct-react";
import App1744 from "./App1744.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1744 />);
  await expect(component).toContainText("Learn React");
});
