
import { test, expect } from "@playwright/experimental-ct-react";
import App1996 from "../example/App1996.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1996 />);
  await expect(component).toContainText("Learn React");
});
