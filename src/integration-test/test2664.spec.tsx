
import { test, expect } from "@playwright/experimental-ct-react";
import App2664 from "../example/App2664.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2664 />);
  await expect(component).toContainText("Learn React");
});
