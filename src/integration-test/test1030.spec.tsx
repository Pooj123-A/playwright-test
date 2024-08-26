
import { test, expect } from "@playwright/experimental-ct-react";
import App1030 from "../example/App1030.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1030 />);
  await expect(component).toContainText("Learn React");
});
