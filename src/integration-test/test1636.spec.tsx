
import { test, expect } from "@playwright/experimental-ct-react";
import App1636 from "../example/App1636.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1636 />);
  await expect(component).toContainText("Learn React");
});
