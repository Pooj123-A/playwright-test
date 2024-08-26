
import { test, expect } from "@playwright/experimental-ct-react";
import App1993 from "../example/App1993.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1993 />);
  await expect(component).toContainText("Learn React");
});
