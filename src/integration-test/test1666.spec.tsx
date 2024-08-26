
import { test, expect } from "@playwright/experimental-ct-react";
import App1666 from "../example/App1666.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1666 />);
  await expect(component).toContainText("Learn React");
});
