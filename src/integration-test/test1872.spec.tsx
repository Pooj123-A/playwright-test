
import { test, expect } from "@playwright/experimental-ct-react";
import App1872 from "../example/App1872.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1872 />);
  await expect(component).toContainText("Learn React");
});
