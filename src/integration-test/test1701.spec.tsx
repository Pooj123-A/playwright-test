
import { test, expect } from "@playwright/experimental-ct-react";
import App1701 from "../example/App1701.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1701 />);
  await expect(component).toContainText("Learn React");
});
