
import { test, expect } from "@playwright/experimental-ct-react";
import App1678 from "../example/App1678.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1678 />);
  await expect(component).toContainText("Learn React");
});
