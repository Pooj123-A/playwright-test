
import { test, expect } from "@playwright/experimental-ct-react";
import App2890 from "../example/App2890.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2890 />);
  await expect(component).toContainText("Learn React");
});
