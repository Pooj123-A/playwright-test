
import { test, expect } from "@playwright/experimental-ct-react";
import App207 from "../example/App207.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App207 />);
  await expect(component).toContainText("Learn React");
});
