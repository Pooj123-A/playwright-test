
import { test, expect } from "@playwright/experimental-ct-react";
import App1538 from "./App1538.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1538 />);
  await expect(component).toContainText("Learn React");
});
