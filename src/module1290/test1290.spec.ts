
import { test, expect } from "@playwright/experimental-ct-react";
import App1290 from "./App1290.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1290 />);
  await expect(component).toContainText("Learn React");
});
