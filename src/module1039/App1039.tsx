
import { test, expect } from "@playwright/experimental-ct-react";
import App1039 from "./App1039.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1039 />);
  await expect(component).toContainText("Learn React");
});
