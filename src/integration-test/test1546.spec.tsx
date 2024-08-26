
import { test, expect } from "@playwright/experimental-ct-react";
import App1546 from "../example/App1546.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1546 />);
  await expect(component).toContainText("Learn React");
});
