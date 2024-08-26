
import { test, expect } from "@playwright/experimental-ct-react";
import App1611 from "../example/App1611.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1611 />);
  await expect(component).toContainText("Learn React");
});
