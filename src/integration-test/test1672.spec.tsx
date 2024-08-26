
import { test, expect } from "@playwright/experimental-ct-react";
import App1672 from "../example/App1672.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1672 />);
  await expect(component).toContainText("Learn React");
});
