
import { test, expect } from "@playwright/experimental-ct-react";
import App1477 from "../example/App1477.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1477 />);
  await expect(component).toContainText("Learn React");
});
