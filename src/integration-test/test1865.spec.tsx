
import { test, expect } from "@playwright/experimental-ct-react";
import App1865 from "../example/App1865.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1865 />);
  await expect(component).toContainText("Learn React");
});
