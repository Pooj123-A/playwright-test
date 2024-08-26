
import { test, expect } from "@playwright/experimental-ct-react";
import App239 from "../example/App239.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App239 />);
  await expect(component).toContainText("Learn React");
});
