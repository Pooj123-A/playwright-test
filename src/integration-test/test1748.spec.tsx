
import { test, expect } from "@playwright/experimental-ct-react";
import App1748 from "../example/App1748.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1748 />);
  await expect(component).toContainText("Learn React");
});
