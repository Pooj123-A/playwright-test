
import { test, expect } from "@playwright/experimental-ct-react";
import App1843 from "../example/App1843.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1843 />);
  await expect(component).toContainText("Learn React");
});
