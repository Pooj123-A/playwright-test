
import { test, expect } from "@playwright/experimental-ct-react";
import App1597 from "../example/App1597.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1597 />);
  await expect(component).toContainText("Learn React");
});
