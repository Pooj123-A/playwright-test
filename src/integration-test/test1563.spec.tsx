
import { test, expect } from "@playwright/experimental-ct-react";
import App1563 from "../example/App1563.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1563 />);
  await expect(component).toContainText("Learn React");
});
