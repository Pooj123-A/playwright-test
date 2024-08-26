
import { test, expect } from "@playwright/experimental-ct-react";
import App1724 from "../example/App1724.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1724 />);
  await expect(component).toContainText("Learn React");
});
