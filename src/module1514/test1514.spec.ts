
import { test, expect } from "@playwright/experimental-ct-react";
import App1514 from "./App1514.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1514 />);
  await expect(component).toContainText("Learn React");
});
