
import { test, expect } from "@playwright/experimental-ct-react";
import App1998 from "../example/App1998.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1998 />);
  await expect(component).toContainText("Learn React");
});
