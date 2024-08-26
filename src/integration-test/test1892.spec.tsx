
import { test, expect } from "@playwright/experimental-ct-react";
import App1892 from "../example/App1892.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1892 />);
  await expect(component).toContainText("Learn React");
});
