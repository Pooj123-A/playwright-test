
import { test, expect } from "@playwright/experimental-ct-react";
import App1976 from "../example/App1976.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1976 />);
  await expect(component).toContainText("Learn React");
});
