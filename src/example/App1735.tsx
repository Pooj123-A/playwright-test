
import { test, expect } from "@playwright/experimental-ct-react";
import App1735 from "./App1735.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1735 />);
  await expect(component).toContainText("Learn React");
});
