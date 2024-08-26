
import { test, expect } from "@playwright/experimental-ct-react";
import App962 from "../example/App962.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App962 />);
  await expect(component).toContainText("Learn React");
});
