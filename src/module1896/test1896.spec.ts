
import { test, expect } from "@playwright/experimental-ct-react";
import App1896 from "./App1896.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1896 />);
  await expect(component).toContainText("Learn React");
});
