
import { test, expect } from "@playwright/experimental-ct-react";
import App1371 from "../example/App1371.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1371 />);
  await expect(component).toContainText("Learn React");
});
