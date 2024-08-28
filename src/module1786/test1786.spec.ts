
import { test, expect } from "@playwright/experimental-ct-react";
import App1786 from "./App1786.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1786 />);
  await expect(component).toContainText("Learn React");
});
